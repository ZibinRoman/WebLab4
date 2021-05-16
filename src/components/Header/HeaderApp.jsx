class HeaderApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            header: [],
            headerData: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            headerData: this.props.headerData,
            header: this.props.header
        });
    }    
    render(){
        const{error, isLoaded, headerData, header} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <header className="header_root container-fluid sticky-top bg-dark text-white">
                    <HeaderDesc headerData={headerData}/>
                    <Clock/>
                    <Nav header={header}/>
                </header>
            );
        }
    }
}