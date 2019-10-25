import React, { Component } from 'react';
import '../comannt.css';
import Footer from '../footer';


export default class Tulsigreentea extends Component {

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
                    <div className='tht01'>
                    <h3>Benefits of Tulsi Green Tea </h3>
                    <ul>
                        <li>Reduces Stress </li>
	                    <li>Improves Metabolism</li>
	                    <li>Dissolves Kidney Stones.</li>
                        <li>Promotes great heart health.</li>
	                    <li>Prevents cold.</li>
	                    <li>Reduces fever. </li>
	                    <li>Relieves headaches.</li>
	                    <li>Improves hair and skin. </li>

                    </ul>
                    <p>Drinking Tulsi Green Tea regularly can help maintain beautiful and healthy skin. It also helps in the reducing itchiness of the scalp and reduces hair fall. Green tea boost metabolism and helps burn fat. Both Tulsi and Green tea are rich in antioxidants.</p>
                    </div>
                
                </div>
                <Footer/>
            </div>
        )
    }
}
