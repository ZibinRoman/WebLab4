class AlertApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: "",
            text: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            title: this.props.title,
            text: this.props.text
        });
    }    
    
    render(){
        const{error, isLoaded, title, text} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <h1 className="text-sm-start user-select-none border-bottom alert-heading">{title}</h1>
                    <hr></hr>
                    <p className="text-sm-start user-select-none">{text}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            );
        }
    }
}
/*<AlertApp title={"Привет"} text={"Привет"}/>*/
