'use client'

import * as React from 'react';
import { Icon } from "@chakra-ui/react";
import { PiClipboardBold, PiClipboardThin, PiGearThin, PiStudentThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { BeeSeeNav, DefaultPageWrapper } from "../../components/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Button from "../../../../components/button";
import { FiPlusCircle } from "react-icons/fi";
import Searchbar from "../../../../components/input/searchbar";
import List from "../../../../components/layout/list";
import Modal, { openModalContent, setOpen } from "../../../../components/modal";
import { create } from 'domain';


const StudentListTable = async () => {
    const supabase = useSupabaseClient();
    const { data, error } = await supabase.from('students').select();
    let students = data;

    console.log(JSON.stringify(students));

    return (
        <div>
            Hello
        </div>
    )
}

const AddStudentModal = () => {
    const supabase = useSupabaseClient();

    const createStudent = () => {
        console.log('create student');
        supabase.from('student').insert([{
            first_name: 'test',
            last_name: 'test',
            email: 'nw.white22@gmail.com',
        }]);
    };
    
    return (
        <>
            <form>
                <div className="space-y-12 w-full">
                    <div className="grid grid-rows-2">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete='given-name'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                >
                    Create
                </button>
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </button>
            </div>
        </>
    )
}

const StudentList = () => {
    let [content, setContent] = useState(null);
    let [searchValue, setSearchValue] = useState('');
    let [students, setStudents] = useState<any>([]);
    let supabase = useSupabaseClient();
    let [openModal, setOpenModal] = useState(false);

    let createStudent = () => {
        openModalContent({
            content: () => { return (<AddStudentModal />) },
        });
    }

    useEffect(() => {
        supabase.from('student').select().then(({ data }) => {
            setStudents(data);
        });
    }, []);



    return (
        <div className="flex flex-col gap-y-4">
            <Button
                className="flex justify-center border bg-stone-200 p-4 rounded gap-2"
                onClick={createStudent}
            >
                <FiPlusCircle />
                <span>Add Student</span>
            </Button>
            <Searchbar onChange={(e) => setSearchValue(e?.target?.value)} value={searchValue} />
            <div className="flex items-start justify-start">
                <List people={students} />
            </div>
        </div>
    );
}

export default StudentList;