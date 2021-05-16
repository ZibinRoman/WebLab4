class FooterDesc extends React.Component{
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
                <footer className="footer_desc container">
                    <div className="row align-items-start">
                        {footer.map(item => (
                            <FooterData key={item.id} title={item.title} value={item.value}/>
                        ))}
                    </div>
                </footer>
            );
        }
    }
}

class FooterData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: "",
            value: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            title: this.props.title,
            value: this.props.value
        });
    }    
    
    render(){
        const{error, isLoaded, title, value} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="col-sm">
                    <h1 className="text-sm-start user-select-none border-bottom">
                        {title}
                    </h1>
                    <p className="text-sm-start user-select-none">
                        {value}
                    </p>
                </div>
            );
        }
    }
}