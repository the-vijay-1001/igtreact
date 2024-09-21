import { useState } from "react";

function AccordianPage() {
    const [flag, setFlag] = useState({
        a1: false,
        a2: false,
        a3: false,
        a4: false
    })
    return <>
        <div className="flex justify-center mt-5">
            <div className="w-full  ms-[150px]">
                <div className="w-[80%] py-3 border pt-2 bg-gray-100 " onClick={() => setFlag({ a1: !flag.a1 })}>
                    <div className="flex m-3 justify-start" style={{ alignItems: "center" }}>
                        <div className="text-xl border rounded-full w-10 h-10 flex justify-center bg-emerald-400 text-white" style={{ alignItems: "center" }}>{!flag.a1 ? "+" : "-"}</div>
                        <div className="ms-3">how to contact riders with emergency ?</div>
                    </div>
                    {flag.a1 && <>
                        <div className="h-fit w-fit mt-4 m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum excepturi impedit aliquam facere obcaecati, consequuntur, pariatur praesentium laudantium accusamus neque molestiae veniam dolorem blanditiis, aut quaerat dolor. Ad animi mollitia ullam quaerat
                        </div>
                    </>}
                </div>
                <div className="w-[80%] py-3 border pt-2 bg-gray-100 " onClick={() => setFlag({ a2: !flag.a2 })}>
                    <div className="flex m-3 justify-start" style={{ alignItems: "center" }}>
                        <div className="text-xl border rounded-full w-10 h-10 flex justify-center bg-emerald-400 text-white" style={{ alignItems: "center" }}>{!flag.a2 ? "+" : "-"}</div>
                        <div className="ms-3">App installation failed, how to update system information?</div>
                    </div>
                    {flag.a2 && <>
                        <div className="h-fit w-fit mt-4 m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum excepturi impedit aliquam facere obcaecati, consequuntur, pariatur praesentium laudantium accusamus neque molestiae veniam dolorem blanditiis, aut quaerat dolor. Ad animi mollitia ullam quaerat
                        </div>
                    </>}
                </div>
                <div className="w-[80%] py-3 border pt-2 bg-gray-100 " onClick={() => setFlag({ a3: !flag.a3 })}>
                    <div className="flex m-3 justify-start" style={{ alignItems: "center" }}>
                        <div className="text-xl border rounded-full w-10 h-10 flex justify-center bg-emerald-400 text-white" style={{ alignItems: "center" }}>{!flag.a3 ? "+" : "-"}</div>
                        <div className="ms-3">website response taking time, how to improve ?</div>
                    </div>
                    {flag.a3 && <>
                        <div className="h-fit w-fit mt-4 m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum excepturi impedit aliquam facere obcaecati, consequuntur, pariatur praesentium laudantium accusamus neque molestiae veniam dolorem blanditiis, aut quaerat dolor. Ad animi mollitia ullam quaerat
                        </div>
                    </>}
                </div>
                <div className="w-[80%] py-3 border pt-2 bg-gray-100 " onClick={() => setFlag({ a4: !flag.a4 })}>
                    <div className="flex m-3 justify-start" style={{ alignItems: "center" }}>
                        <div className="text-xl border rounded-full w-10 h-10 flex justify-center bg-emerald-400 text-white" style={{ alignItems: "center" }}>{!flag.a4 ? "+" : "-"}</div>
                        <div className="ms-3">new update fixed all bugs and issues ?</div>
                    </div>
                    {flag.a4 && <>
                        <div className="h-fit w-fit mt-4 m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum excepturi impedit aliquam facere obcaecati, consequuntur, pariatur praesentium laudantium accusamus neque molestiae veniam dolorem blanditiis, aut quaerat dolor. Ad animi mollitia ullam quaerat
                        </div>
                    </>}
                </div>
            </div>
        </div>
    </>
}

export default AccordianPage;