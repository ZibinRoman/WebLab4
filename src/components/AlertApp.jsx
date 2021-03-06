class ModalAlert extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div 
                    className="modal fade"
                    id={this.props.alert} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.alert}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalAlertHeader alert={this.props.alert} title={this.props.title}/>
                            <ModalAlertBody date={this.props.date} input={this.props.input} output={this.props.output} people={this.props.count} price={this.props.price}/>
                            <ModalAlertFooter modal={this.props.modal}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalAlertHeader extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div className="modal-header bg-dark text-white">
                    <h1 class="modal-title user-select-none fs-2" id={`${this.props.alert}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalAlertBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            input: "",
            output: "",
            people: 1,
            price: 0,
            date: moment()
        };
        
    }
    
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            input: this.props.input,
            city1: this.props.output,
            people: this.props.people,
            price: this.props.price,
            date: this.props.date
        });
    }   
    
    componentDidUpdate(prevProps) {
        if (this.props.input !== prevProps.input) {
            this.setState({
                input: this.props.input
            });
        }
        if (this.props.output !== prevProps.output) {
            this.setState({
                output: this.props.output
            });
        }
        if (this.props.people !== prevProps.people) {
            this.setState({
                people: this.props.people
            });
        }
        if (this.props.price !== prevProps.price) {
            this.setState({
                price: this.props.price
            });
        }
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
    }
    
    render(){
        const{error, isLoaded, input, output, people, price, date} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            moment.lang('ru');
            let dat = moment(date);
            return(
                <div className="modal-body bg-white text-dark">
                    <h2 className="user-select-none">????????: {input}</h2>
                    <h2 className="user-select-none">????????????: {output}</h2>
                    <h2 className="user-select-none">?????????? ??????????: {people}</h2>
                    <h2 className="user-select-none">???????? ????????????: {dat.format('MMMM, dddd DD, YYYY')}</h2>
                    <h2 className="user-select-none">????????: {price}</h2>
                </div>
            );
        }
    }
}

class ModalAlertFooter extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div className="modal-footer bg-white text-dark">
                    <button type="button" class="btn btn-dark" data-bs-target={`#${this.props.modal}`} data-bs-toggle="modal" data-bs-dismiss="modal">??????????</button>
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">??????????????</button>
                </div>
            );
        }
    }
}