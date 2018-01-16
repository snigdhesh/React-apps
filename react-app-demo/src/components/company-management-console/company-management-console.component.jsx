import React from 'react';
import { Header } from '../header/header.component';
import { Add } from '../input/add.component';
import { CompanyList } from '../company-list/company-list.component';
import { CompanyDetails } from '../company-details/company-details.component';

export class CompanyManagementConsole extends React.Component {

    constructor() {
        super();
        this.state = {
            companies:[
                { name: 'Google',desc:'web search', bgColor: '#F9E79F' },
                { name: 'Microsoft',desc:'software company', bgColor: '#AED6F1' },
                { name: 'Amazon',desc:'e-commerce', bgColor: '#ABEBC6' },
                { name: 'Netflix',desc:'video hosting', bgColor: '#F5B7B1' }
            ],
            selectedCompany:{}
        };
    }

    handleAdd(name,desc){
        let newCompany={name:name,desc:desc,bgColor:'#'+Math.floor(Math.random()*0xffffff).toString()};
        let companies = this.state.companies;
        companies.push(newCompany);
        this.setState(companies);        
    }

    handleDescClick(i){
        //console.log(i);
        let selectedCompany=this.state.companies[i];
        this.setState({selectedCompany:selectedCompany});
    }

    handleCompRemove(i){
        //console.log(i);
        let companies=this.state.companies;
        companies.splice(i,1);
        let selectedCompany;
        if(companies.length>0){
            selectedCompany=companies[0];
        }
        else{
            selectedCompany={};
        }

        this.setState(
            {
                companies:companies,
                selectedCompany:selectedCompany
            }
        )
    }

    render() {
        return ( 
            <div>
                {/* <h1>You are in company management console component</h1> */}
                <Header title="Company Management Console" />
                <Add onAdd={this.handleAdd.bind(this)}/>
                <CompanyList companies={this.state.companies} onDescClick={this.handleDescClick.bind(this)} onCompRemove={this.handleCompRemove.bind(this)} />
                <CompanyDetails currentCompany={this.state.selectedCompany}/>
            </div>
        )
    }
} 