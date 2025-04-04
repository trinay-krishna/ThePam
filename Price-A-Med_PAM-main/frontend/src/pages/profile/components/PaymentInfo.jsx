import {useState} from "react";
import PaymentInfoForm from "./PaymentInfoForm.jsx";

const PaymentInfo = ({data}) => {
    const [form, setForm] = useState(false);

    const handleEdit = () => {
        setForm(!form);
    }

    const maskCardNumber = (cardNumber) => {
        if (!cardNumber) return "";
        return "**** **** **** " + cardNumber.slice(-4);
    };

    const renderItem = (section) => (
        <div className="p-2">
            <div className="flex justify-between items-center mb-4 p-0">
                <span className="text-xl font-semibold">{section.title}</span>
                <img
                    id={section.id}
                    src="https://res.cloudinary.com/dkezdazmt/image/upload/v1742160799/Evernorth/Plus.svg"
                    className="w-6 hover:scale-110 "
                    onClick={handleEdit}
                />
            </div>

            <div className="flex gap-4 flex-col ">
                {section?.cards?.length === 0 ? (
                    <div className="flex justify-center h-[60px]">
                        <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737902486/Evernorth/history.svg"/>
                    </div>
                ) : (
                    section.cards.map((card, index) => <div key={index}
                                                                className="flex justify-between hover:bg-gray-100  rounded-lg ">
                        <div className="flex flex-col">
                            <span>{card.cardHolderName}</span>
                            {/*<span>{card.cardNumber}</span>*/}
                            <span>{maskCardNumber(card.cardNumber)}</span>

                            <span>{card.expirationDate}</span>
                        </div>
                        <img className="w-4 mr-1 hover:scale-105 "
                             onClick={() => console.log(card.cardID)}
                             src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737904496/Evernorth/delete.svg"
                        />
                    </div>)
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className="border-[3px] bg-[#fff] shadow-lg text-[#035c67] rounded-md p-6 hover:scale-102">
                <div>{renderItem(data)}</div>
            </div>

            {form && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen w-full flex items-center justify-center">
                    <div className="w-[35%]  bg-[#035c67aa]  p-4 rounded-lg border-2 border-[#035c67] shadow">
                        <div className="flex flex-row-reverse">
                            <img
                                onClick={handleEdit}
                                className="w-[25px]"
                                src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
                            />
                        </div>
                        <PaymentInfoForm/>
                    </div>
                </div>
            )}

            {form && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
            )}
        </>
    );
}

export default PaymentInfo;