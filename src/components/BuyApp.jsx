class BuyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            city: [],
            contentText: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            city: this.props.city,
            contentText: this.props.contentText
        });
    }    
    
    render(){
        const{error, isLoaded, city, contentText} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="buy_root container">
                    <BuyTitle title={"Укажите маршрут, чтобы купить авиабилеты"} icon={"bi bi-compass"}/>
                    <BuyTextComponent input={this.props.input} output={this.props.output} items={city} contentText={contentText} handleChange={this.props.handleChange} handleClick1={this.props.handleClick1}/>
                    <BuyTitle title={"Укажите дату полета"} icon={"bi bi-calendar"}/>
                    <DatePickerApp date={this.props.date} handleChange={this.props.handleChange} changeHandler={this.props.changeHandler}/>
                    <BuyTitle title={"Укажите количество людей"} icon={"bi bi-clouds"}/>
                    <RangeApp id={"range"} name={"count"} label={"Выберите количество людей"} min={1} max={10} step={1} value={this.props.value} handleChange={this.props.handleChange}/>
                    <BuyButton modal={this.props.modal} tooltip={"Нажмите для покупки"} title={"Купить билет"} handleClick={this.props.handleClick}/>
                    
                </div>
            );
        }//<BuyDatePicker date={this.props.date} handleChange={this.props.handleChange}/>
    }//<BuyDate date={this.props.date} handleChange={this.props.handleChange}/>
}

class BuyTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: ""
            
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            title: this.props.title
        });
    }    
    
    render(){
        const{error, isLoaded, title} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="row-sm d-sm-flex align-items-start my-1 py-1">
                    <div className="col-sm">
                        <h1 className="user-select-none">
                            <i className={this.props.icon}></i>
                            {title}
                        </h1>
                    </div>
                </div>
            );
        }
    }
}

class BuyTextComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            contentText: [],
            input: "",
            output: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.items,
            contentText: this.props.contentText
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
    }
    
    render(){
        const{error, isLoaded, items, contentText, input, output} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            contentText.[0].value=input;
            contentText.[1].value=output;
            return(
                <div className="row-sm d-sm-flex align-items-center my-1 py-1">
                    {contentText.map(item => (
                        <BuyText 
                            key={item.id}
                            placeholder={item.placeholder}
                            name={item.name}
                            id={item.idC}
                            value={item.value}
                            minlength={"2"}
                            maxlength={"64"}
                            items={items}
                            desc={item.desc}
                            handleChange={this.props.handleChange}
                            handleClick1={this.props.handleClick1}
                        />
                    ))}
                </div>
            );
        }
    }
}

class BuyText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            placeholder: "",
            minlength: 1,
            maxlength: 1,
            id: "",
            value: "",
            desc: "",
            tax: 0,
            name: ""
            
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.items,
            placeholder: this.props.placeholder,
            minlength: this.props.minlength,
            maxlength: this.props.maxlength,
            id: this.props.id,
            value: this.props.value,
            name:  this.props.name,
            desc: this.props.desc
        });
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({
                value: this.props.value
            });
        }
    }
    
    render(){
        const{error, isLoaded, items, placeholder,  minlength, maxlength, id, value, name, tax, desc} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="col-sm">
                    <div className="dropdown">
                        <div className="form-floating">
                            <input 
                                type="text"
                                id={id}
                                className="form-control w-100 border border-dark border-3 rounded"
                                placeholder={placeholder}
                                name={name}
                                value={value}
                                minlength={minlength}
                                maxlength={maxlength}
                                data-bs-toggle="dropdown" aria-expanded="false"
                                onChange={this.props.handleChange}
                            />
                            <label 
                                for={id}
                            >
                                {desc}
                            </label>
                            <ul className="dropdown-menu" aria-labelledby={id}>
                                {items.map(item => (
                                    <li>
                                        <h1 
                                            className="dropdown-item user-select-none" 
                                            onClick={(e) => this.props.handleClick1(item.id, name, item.name,item.tax, e)}
                                        >
                                            {`Город:${item.name} Цена:${item.tax}`}
                                        </h1>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class BuyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: "",
            tooltip: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            title: this.props.title,
            tooltip: this.props.tooltip
        });
    }    
    
    render(){
        const{error, isLoaded, title, tooltip} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="row-sm d-sm-flex align-items-center my-1 py-1">
                    <div className="col-sm">
                        <button type="button" 
                            class="btn btn-dark"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title={tooltip}
                            data-bs-toggle="modal" 
                            data-bs-target={`#${this.props.modal}`}
                            onClick={this.props.handleClick}
                        >
                            {title}
                            <i class="bi bi-hand-index"></i>
                        </button>
                    </div>
                </div>
            );
        }
    }
}

class BuyDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            date: moment(),
            now: moment(),
            week: moment()
        };
        
    }
    
    componentDidMount(){
        const{now, week} = this.state;
        this.setState({
            isLoaded: true,
            date: this.props.date,
            now: now.format("YYYY-MM-DD"),
            week: week.add("days", 14).format("YYYY-MM-DD")
        });
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
    }
    
    render(){
        const{error, isLoaded, date, now, week} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="row-sm d-sm-flex align-items-center my-1 py-1">
                    <div className="col-sm">
                    <input 
                        type="date" 
                        className="form-control w-100 border border-dark border-3 rounded"
                        name="date"
                        value={date}
                        min={now}
                        max={week}
                        onChange={this.props.handleChange}
                    />
                    </div>
                </div>
            );
        }
    }
}

class BuyDatePicker  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            date: moment(),
            now: moment(),
            week: moment()
        };
        this.dat = this.dat.bind(this);
    }
    
    dat(date, now, week){
        $.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        let currentDate;
    $(function(){
        $("#date").datepicker({
            dateFormat: "dd.mm.yy",
            maxDate: week,
            minDate: now,
            showOn: "both",
            buttonImageOnly: true,
            buttonText: "Календарь",
            autoSize: true,
            altField: "#date",
            altFormat: "dd.mm.yy"
        });
        $( "#date" ).datepicker("setDate", date);
        currentDate = moment($("#date").datepicker("getDate")).format("DD.MM.YYYY");
        //$('#date').val(currentDate);
    });
        console.log(currentDate);
        return currentDate;
    }
    
    componentDidMount(){
        const{now, week, date} = this.state;
        this.setState({
            isLoaded: true,
            date: this.props.date,
            now: now.format("DD.MM.YYYY"),
            week: week.add("days", 14).format("DD.MM.YYYY")
            //now: now.format("YYYY-MM-DD"),
            //week: week.add("days", 14).format("YYYY-MM-DD")
        });
        this.dat(date, now, week);
    } 
    
    componentDidUpdate(prevProps) {
        const{now, week, date} = this.state;
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
        this.dat(date, now, week);
    }
    
    render(){
        const{error, isLoaded, date, now, week} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="row-sm d-sm-flex align-items-center my-1 py-1">
                    <div className="col-sm">
                    <input 
                        type="text" 
                        className="form-control w-100 border border-dark border-3 rounded"
                        name="date"
                        id="date"
                        value={date}
                        onChange={this.props.handleChange}
                    />
                    </div>
                </div>
            );
            
        }
    }
}


