
import React from 'react';

export class Add extends React.Component{

    add(){
        this.props.onAdd(this.refs.cn.value,this.refs.cd.value);
        this.refs.cn.value='';
        this.refs.cd.value='';
    }


    render(){
        return(
            <div className="container">
                <div className="col-sm-3">
                <input ref="cn" type="text" className="form-control" placeholder="Enter company name"/>
                </div>
                <div className="col-sm-3">
                <input ref="cd" type="text" className="form-control" placeholder="Enter company description"/>
                </div>
                <div className="col-sm-3">
                <button className="btn btn-primary" onClick={this.add.bind(this)}>Add</button>
                </div>
                <div className="col-sm-3"></div>
            </div>
        )
    }
}