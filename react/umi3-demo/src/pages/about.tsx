import { useSelector } from "react-redux";

const About = function (){
    const store = useSelector((state:any)=>state.students.data);
    console.log("store",store)
    const dom = store.map((stu:any)=><div>{stu.name}</div>)
    return (<div>
        <h2>=============使用student数据=============</h2>
            {dom}
    </div>)
}

export default About;