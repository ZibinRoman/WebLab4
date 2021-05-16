class ErrorApp extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className="error_root">
                <div className="d-flex justify-content-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Загрузка...</span>
                        <p>{this.props.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}