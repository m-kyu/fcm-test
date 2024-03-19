
import Footer from "@/comp/Footer";
import Header from "@/comp/Header";
import axios from "axios";

function about() {
    async function getData(){
        const a = await axios.get('/api/100000');
        console.log(a.data)

    }


    return (
        <>
            <Header/>
            <div style={{height:'2000px'}}>
                어바웃 내용.....
                <button onClick={getData}>가져오기</button>
            </div>
            <Footer/>
        </>
    );
}

export default about;