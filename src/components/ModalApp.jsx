class ModalConfirm extends React.Component{
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
                    id={this.props.modal} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.modal}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalHeader modal={this.props.modal} title={this.props.title}/>
                            <ModalBody date={this.props.date} input={this.props.input} output={this.props.output} people={this.props.count} price={this.props.price}/>
                            <ModalFooter alert={this.props.alert}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalHeader extends React.Component{
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
                    <h1 class="modal-title user-select-none fs-2" id={`${this.props.modal}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalBody extends React.Component{
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
                    <h2 className="user-select-none">Куда: {input}</h2>
                    <h2 className="user-select-none">Откуда: {output}</h2>
                    <h2 className="user-select-none">Всего людей: {people}</h2>
                    <h2 className="user-select-none">Дата вылета: {dat.format('MMMM, dddd DD, YYYY')}</h2>
                    <h2 className="user-select-none">Итого к оплате: {price}</h2>
                </div>
            );
        }
    }
}

class ModalFooter extends React.Component{
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
                    <button type="button" class="btn btn-dark" data-bs-target={`#${this.props.alert}`} data-bs-toggle="modal" data-bs-dismiss="modal">Купить</button>
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Закрыть</button>
                </div>
            );
        }
    }
}