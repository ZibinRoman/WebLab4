class HeaderDesc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            headerData: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            headerData: this.props.headerData
        });
    }    
    
    render(){
        const{error, isLoaded, headerData} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="header_root_desc container-sm">
                    <div className="row align-items-center">
                        {headerData.map(item => (
                            <HeaderData key={item.id} headerData={item.value}/>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

class HeaderData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            headerData: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            headerData: this.props.headerData
        });
    }    
    
    render(){
        const{error, isLoaded, headerData} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="col-md align-self-center">
                    <h1 className="text-center user-select-none">
                        {headerData}
                    </h1>
                </div>
            );
        }
    }
}