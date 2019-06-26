import React from 'react'
import { Company } from '../company/company.component';
export class CompanyList extends React.Component {


    onDescClick(i) {
        this.props.onDescClick(i);
    }

    onCompRemove(i){
        this.props.onCompRemove(i);
    }

    render() {
        return (

            <div className="container">
                <br /> <br />
                {
                    this.props.companies.map((i,index)=>{
                        return <Company 
                        key={index} 
                        name={i.name} 
                        bgColor={i.bgColor} 
                        onDescClick={this.onDescClick.bind(this,index)}
                        onCompRemove={this.onCompRemove.bind(this,index)}  />
                    }, this)
                }
            </div>
        )
    }
} 