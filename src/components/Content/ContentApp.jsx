class ContentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            content: [],
            city: [],
            contentText: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            content: this.props.content,
            city: this.props.city,
            contentText: this.props.contentText
        });
    }    
    
    render(){
        const{error, isLoaded, content, city, contentText} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="content_root container-fluid my-1 py-1">
                    <BuyApp date={this.props.date} input={this.props.input} output={this.props.output} value={this.props.value} city={city} contentText={contentText} handleChange={this.props.handleChange} handleClick1={this.props.handleClick1} handleClick={this.props.handleClick} modal={this.props.modal}/>
                    <CarouselApp data={content} name={"carousel_root"}/>
                    <AccordionApp items={this.props.accordion}/>
                </div>
            );
        }
    }
}