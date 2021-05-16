class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            count: 1,
            input: "",
            output: "",
            price: 0,
            inputPrice: 0,
            outputPrice: 0,
            date: moment()
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickText = this.handleClickText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(){
        const{inputPrice, outputPrice, count} = this.state;
        this.setState({
            price: (inputPrice+outputPrice)*count
        });
    }
    
    handleClickText(lid, lname, litem, ltax, event){
        const{input, output, inputPrice, outputPrice} = this.state;
        //console.log(`Имя: ${lname} Ид: ${lid} Имя: ${litem} Стоимость ${ltax}`);
        switch(lname){
            case "input":
                this.setState({
                    input: litem,
                    inputPrice: ltax
                });
            break;
            case "output":
                this.setState({
                    output: litem,
                    outputPrice: ltax
                });
            break;
        }
        
    }
    
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    
    componentDidMount(){
        const{error, isLoaded, items, date} = this.state;
        let a = {
            iofile: "data/App.json"
        }
        fetch("src/api/load.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(a)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        this.setState({
            date: date.format('YYYY-MM-DD')
        });
    }
    
    render(){
        const{error, isLoaded, items, count, price, input, output, date} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            let mC = "confirm";
            let mA = "alert";
            return(
                <div className="app_root">
                    <HeaderApp headerData={items.headerData} header={items.header}/>
                    <ContentApp accordion={items.accordion} date={date} content={items.content} city={items.city} contentText={items.contentText} handleChange={this.handleChange} handleClick1={this.handleClickText} handleClick={this.handleClick} value={count} modal={mC} input={input} output={output}/>
                    <FooterApp footer={items.footer}/>
                    <ModalConfirm date={date} alert={mA} modal={mC} title={"Подтверждение покупки"} input={input} output={output} count={count} price={price}/>
                    <ModalAlert date={date} alert={mA} modal={mC} title={"Куплено"} input={input} output={output} count={count} price={price}/>
                </div>
            );
        }
    }
}