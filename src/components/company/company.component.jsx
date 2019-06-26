import React from 'react'
export class Company extends React.Component{


    onDescClick(){
        this.props.onDescClick();
    }
    onCompRemove(e){
        this.props.onCompRemove();
        e.stopPropagation();
    }

    render(){
        return(
            <div className="well align" style={{backgroundColor:this.props.bgColor}} onClick={this.onDescClick.bind(this)}>
                <button className="btn btn-default pull-right" onClick={this.onCompRemove.bind(this)}> X </button>
                <h4>{this.props.desc}</h4>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
} 