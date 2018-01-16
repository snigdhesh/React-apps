import React from 'react'
export class CompanyDetails extends React.Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:this.props.currentCompany.bgColor}}>
                <h1>{this.props.currentCompany.name}</h1>
                <h3>{this.props.currentCompany.desc}</h3>
            </div>
        )
    }
}