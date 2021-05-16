class AccordionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.items
        });
    }
    
    render(){
        const{error, isLoaded, items, activeTab} = this.state;
        if (error) {
            return <div className="error">Ошибка: {error.message}</div>;
        } 
        else if (!isLoaded) {
            return <div className="load">Загрузка...</div>;
        }
        else{
            return(
                <div className="accordion_root container">
                    <div class="accordion accordion-flush" id="accordion_root">
                    {items.map(item => (
                        <Accordion_item key={item.id} id={item.id} header={item.title} values={item.values} parent={"accordion_root"}/>
                    ))}
                    </div>
                </div>
            );
        }
    }
}

class Accordion_item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div class="accordion-item">
                    <Accordion_header id={this.props.id} header={this.props.header} parent={this.props.parent}/>
                    <Accordion_body id={this.props.id} values={this.props.values} parent={this.props.parent}/>
                </div>
            );
        }
    }
}

class Accordion_header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <h2 class="accordion-header" id={`flush-heading${this.props.id}`}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${this.props.id}`} aria-expanded="false" aria-controls={`flush-collapse${this.props.id}`}>
                        {this.props.header}
                    </button>
                </h2>
            );
        }
    }
}

class Accordion_body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.values
        });
    }
    
    render(){
        const{error, isLoaded, items} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div id={`flush-collapse${this.props.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${this.props.id}`} data-bs-parent={`#${this.props.parent}`}>
                    <div className="accordion-body bg-light">
                        
                        {items.map(item => (
                            <div className="d-grid gap-2 d-md-block m-1" key={item.id}>
                                <p className="text-start text-wrap user-select-none text-monospace">{item.value}</p>
                            </div>
                        ))}
                         
                    </div>
                </div>
            );
        }
    }
}