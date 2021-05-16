class FooterApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            footer: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            footer: this.props.footer
        });
    }    
    
    render(){
        const{error, isLoaded, footer} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <footer className="footer_root container-fluid border-top">
                    <FooterDesc footer={footer}/>
                </footer>
            );
        }
    }
}

