import React, { Component } from 'react';
import '../comannt.css';
import Footer from '../footer';


export default class Bluetea extends Component {

    // constructor(){
    //     super();
        
    //     this.state={
    //         prodArray:[]
    //     }
    // }


    // componentDidMount(){
    //     axios.get('https://teacontents.firebaseio.com/tea.json')
    //         .then(response => {
    //             this.setState({
    //                 prodArray:response.data
    //             })
    //             console.log(this.state.prodArray);
    //         } )  ;
        
    //   }
      
    render() {

        return (
            <div>
                <div className='tgt'>
                    <div className='tht02'>
                    
                    <h3>1. Antioxidant properties</h3>
                    <p>One of the major benefits of consuming blue tea or butterfly pea tea is its antioxidant properties. Consuming antioxidant-rich foods is vital for health since they fight off free radicals, which are the primary reason for premature ageing of the body.</p>
                    <h3>2. Anti-diabetic properties</h3>
                    <p>This tea is amazing for diabetic patients as it helps regulate blood sugar levels. A cup of blue butterfly tea taken in between meals will help regulate blood sugar levels.</p>
                    <h3>3. Reduces stress and anxiety</h3>
                    <p>Butterfly pea has been used for reducing stress and anxiety from ancient times. Drinking blue tea will help you feel relaxed and get a good night's rest. It also helps improve brain function and memory.</p>
                    <h3>4. Beneficial for hair and skin</h3>
                    <p>Any ingredient that is rich in antioxidants is amazing for hair and skin. Since this tea is also rich in many vitamins and minerals it proves to be even more effective for preventing premature ageing of skin and hair.</p>
                    <h3>5. Anti-cancer and anti-tumour properties</h3>
                    <p>ClitoriaTernatea's cyclotides can kill cancer inducing cells by disrupting cell membrane integrity. So, drinking a cup of blue tea every day could help prevent diseases like cancer and tumours.</p>
                    <h3>6. Anti-microbial properties</h3>
                    <p>In several Indian studies, butterfly pea exhibited significant anti-microbial effects against Staphylococcus Aureus, which can cause a range of illnesses from minor skin infections like pimples and scalded skin syndrome to life-threatening diseases such as pneumonia, meningitis and even toxic shock syndrome.</p>
                    
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
