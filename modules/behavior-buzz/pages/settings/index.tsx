import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody, Input, SkeletonCircle, SkeletonText, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FiPlusCircle, FiSave, FiTrash } from "react-icons/fi";
import { supabase } from "../../../../components/supabase/supabase";
import { MouseEvent, useEffect, useState } from "react";


const useGetBehaviorSettings = async () => {
    const { data, error } = await supabase.from('behavior').select();

    return !(!!error) ? data : null;
};

const BehaviorSettingCard = (props: {
    key: string,
    title: string,
    description: string,
    frequency: string,
    onDelete: () => void,
}) => {

    return (
        <div className="flex w-full">
            <Card className="flex w-full">
                <CardBody>
                    <div className="flex gap-4 justify-center items-center">
                        <Text className="w-full">{props.title}</Text>
                        <FiTrash className="cursor-pointer" size={20} color="" onClick={() => props.onDelete()} />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

const BehaviorCardEditable = (props: {
    onSave: (input: string) => void,
}) => {
    const [behavior, setBehavior] = useState<{} | string | null>(null);

    return (
        <div className="flex w-full">
            <Card className="flex w-full">
                <CardBody>
                    <div className="flex gap-4 justify-center items-center">
                        <Input placeholder="Behavior Title" onChange={(input) => setBehavior(input?.target?.value)} />
                        <FiSave className="cursor-pointer" size={20} color="" onClick={() => props.onSave(behavior as string)} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

const BehaviorTab = () => {
    const [behaviors, setBehaviors] = useState<any[] | null>([]);
    useEffect(() => {
        useGetBehaviorSettings().then((data) => { setBehaviors(data); });
    }, []);
    const [createBehavior, setCreateBehavior] = useState<boolean>(false);
    async function saveBehavior(behavior) {
        let { data, error } = await supabase.from('behavior')
            .insert([
                {
                    title: behavior,
                }
            ])
            .select();  
        setBehaviors([...behaviors as any[], ...data as any[]]);
    };
    async function onDelete(behaviorId) {
        const { error } = await supabase.from('behavior')
            .delete()
            .eq("id", behaviorId as number);  
            
        if (error === null) {   
            setBehaviors([...behaviors?.filter((behavior) => behavior?.id !== behaviorId) as any[]]);
        }
    }

    return (
        <div className="flex flex-col w-full gap-8 p-4">
            <div className="grid gap-y-4 w-full">
                {(!!behaviors && behaviors?.length > 0) ? behaviors?.map((behavior) => {
                    return (
                        <BehaviorSettingCard
                            key={behavior?.id}
                            title={behavior?.title}
                            description={behavior?.description}
                            frequency={behavior?.frequencyMax}
                            onDelete={() => onDelete(behavior?.id)}
                        />
                    )
                }) :
                    <Box padding='6' boxShadow='lg' bg='white' width={'100%'} rounded={'sm'}>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                }
                {createBehavior ?
                    <BehaviorCardEditable onSave={saveBehavior} /> :
                    null
                }
            </div>
            <div className="flex gap-2 items-center" onClick={() => setCreateBehavior(true)}>
                <FiPlusCircle scale={4} size={20} color="gray" />
                <div className="text-gray-500 text-lg">Add Behavior</div>
            </div>
        </div>
    );
};

// Tabbed version of Settings page 
const Settings = () => {
    return (
        <div className="flex flex-col py-2 px-[20vw]">
            <h1 className="pb-4">Settings</h1>
            <div className="grid h-full">
                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Behaviors</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            Oh, hi mark!
                        </TabPanel>
                        <TabPanel overflowY={"auto"} height={"80vh"}>
                            <BehaviorTab />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
};

// Accordion version of Settings page
const AccordionSettings = () => {
    return (
        <div className="flex flex-col py-2 px-[20vw]">
            <h1 className="pb-12">Settings</h1>
            <div className="grid gap-4">
                <Accordion allowToggle shadow={'md'} borderColor={'gray.500'} rounded={'md'}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontFamily={'montserrat'}>
                                    General
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel>
                            General settings placeholder
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowToggle shadow={'md'} borderColor={'gray.500'} rounded={'md'} overflow="scroll">
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Behaviors
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel>
                            <div className="flex gap-2 items-center">
                                <FiPlusCircle />
                                <div>Add Behavior</div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Settings;