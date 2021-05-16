class CarouselApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            name: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.data,
            name: this.props.name
        });
    }
    
    render(){
        const{error, isLoaded, items, name} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="carousel_root container">
                    <div className="carousel slide" data-bs-ride="carousel" id={name}>
                        <div className="carousel-indicators">
                            {items.map(item => (
                                <CarouselIndicator key={item.id} parent={name} id={item.id}/>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {items.map(item => (
                                <CarouselItem key={item.id} id={item.id} title={item.title} value={item.value} image={item.image}/>
                            ))}
                         </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#${name}`}  data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Предыдущий</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#${name}`}  data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Следующий</span>
                        </button>
                    </div>
                    
                </div>
            );
        }
    }
}

class CarouselIndicator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: 10
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id
        });
    }
    
    render(){
        const{error, isLoaded, id} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            if(id==0){
                return(
                    <button type="button" data-bs-target={`#${this.props.parent}`} data-bs-slide-to={id} class="active" aria-current="true" aria-label={`Slide ${id}`}></button>
                );
            }
            else{
                return(
                    <button type="button" data-bs-target={`#${this.props.parent}`} data-bs-slide-to={id} aria-label={`Slide ${id}`}></button>
                );
            }
            
        }
    }
}

class CarouselItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: 10,
            timer: 5000
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id
        });
    }
    
    render(){
        
        const{error, isLoaded, id, timer} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            if(id==0){
                return(
                    <div className="carousel-item active" data-bs-interval={timer}>
                        <img src={this.props.image} className="d-block w-100 user-select-none" width="256" height="256"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="user-select-none">{this.props.title}</h5>
                            <h5 className="user-select-none">{this.props.value}</h5>
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <div className="carousel-item" data-bs-interval={timer}>
                        <img src={this.props.image} className="d-block w-100 user-select-none" width="256" height="256"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="user-select-none">{this.props.title}</h5>
                            <h5 className="user-select-none">{this.props.value}</h5>
                        </div>
                    </div>
                );
            }
        }
    }
}