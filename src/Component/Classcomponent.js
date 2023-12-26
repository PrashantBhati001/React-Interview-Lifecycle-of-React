import React from 'react';

class Classcomponent extends React.Component{
    
    constructor()
    {
        console.log("Constructor is called");
        super()
        this.state={
            name:"Akansha"
        }
    }
   
    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps called");
        /*
        return {
            name:props.naam
        }
        */
       return null
    }

    componentDidMount()
    {
        console.log("componentDidMount is called");
        this.setState({name:"Priyanka"})
        
    }

    shouldComponentUpdate(nextprop,nextstate)
    {
        console.log("shouldComponentUpadte is called...")
        return true
        //Bydefault false hota hain
    }

    getSnapshotBeforeUpdate(prevprop,prevstate)
    {
        console.log("getsnapshotbefore update is called..")
        return null;
    }

    componentDidUpdate(prevprop,prevstate,snapshot)
    {
        console.log("componentDidUpdate is called...")
        //snapshot coming from getsnapshotbeforeupdate

        //never update state here ,do it conditionally only
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount called...")
    }


    render()
    {
        //never update state here directly
        console.log("Render method is called")
        return (
            <>
              <div>My name is:{this.state.name}</div>

            </>
        )
    }

};

export default Classcomponent