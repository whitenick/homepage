import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody, SkeletonCircle, SkeletonText, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { useSupabaseClient } from "../../../../components/supabase/supabase";
import { useEffect, useState } from "react";


const useGetBehaviorSettings = async () => {
    const client = useSupabaseClient();
    const { data, error } = await client.from('behavior').select();

    return !(!!error) ? data : null;
};

const BehaviorSettingCard = (props: {
    title: string,
    description: string,
    frequency: string,
}) => {
    return (
        <div className="flex w-full">
            <Card>
                <CardBody>
                    <Text>Hello World</Text>
                </CardBody>
            </Card>
        </div>
    )
}

const BehaviorTab = () => {
    const [behaviors, setBehaviors] = useState<any[] | null>([]);
    
    useEffect(() => {
        useGetBehaviorSettings().then((data) => { setBehaviors(data); });
    }, []);

    return (
        <div className="flex flex-col w-full gap-8 p-4">
            <div className="flex w-full">
                {(!!behaviors && behaviors?.length > 0) ? behaviors?.map((behavior) => {
                    return (
                        <BehaviorSettingCard
                            title={behavior?.title}
                            description={behavior?.description}
                            frequency={behavior?.frequencyMax}
                        />
                    )
                }) :
                    <Box padding='6' boxShadow='lg' bg='white' width={'100%'} rounded={'sm'}>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>}
            </div>
            <div className="flex gap-2 items-center">
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
            <div className="grid">
                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Behaviors</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            Oh, hi mark!
                        </TabPanel>
                        <TabPanel>
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
                <Accordion allowToggle shadow={'md'} borderColor={'gray.500'} rounded={'md'}>
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