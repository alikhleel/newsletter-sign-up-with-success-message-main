import { ReactNode } from "react";


interface MyProps {
    children?: ReactNode;
}
export default function Card(props: MyProps) {
    return (
        <>
            <div className="flex sm:justify-center sm:items-center h-full sm:min-h-screen w-full">
                <div className="bg-white max-w-3xl rounded-2xl sm:p-4 sm:pl-0">
                    {props.children}
                </div>
            </div>
        </>
    );

}