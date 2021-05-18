class DatePickerApp extends React.Component{
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
            now: now.format("DD.MM.YYYY"),
            week: week.add("days", 14).format("DD.MM.YYYY")
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
            let a = "datepicker";
            let b = "#datepicker";
            return(
                <div className="row-sm d-sm-flex align-items-center my-1 py-1">
                    <div className="col-sm">
                        
                        <DatePickerQuery ref={this.props.datepicker} a={a} b={b} date={date} now={now} week={week} handleChange={this.props.handleChange} onChange={this.props.changeHandler}/>
                    </div>
                    
                </div>
            );//<DatePickerInput input={a} date={date} now={now} week={week} handleChange={this.props.handleChange}/>
        }
    }
}

class DatePickerInput extends React.Component{
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
            now: this.props.now,
            week: this.props.week
        });
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
        if (this.props.now !== prevProps.now) {
            this.setState({
                now: this.props.now
            });
        }
        if (this.props.week !== prevProps.week) {
            this.setState({
                week: this.props.week
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
                <input 
                    type="text" 
                    className="form-control w-100 border border-dark border-3 rounded"
                    id={this.props.input}
                    name={"date"}
                    ref={this.props.input}
                    value={date}
                    onChange={this.props.handleChange}
                />
            );
        }
    }
}

class DatePickerQuery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
        });
        console.log(this.props.week);
        console.log(this.props.now);
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
        $.datepicker.setDefaults({
            dateFormat: "dd.mm.yy",
            maxDate: this.props.week,
            minDate: this.props.now,
            showOn: "both",
            buttonImageOnly: true,
            buttonText: "Календарь",
            autoSize: true
        })
        /*$(this.props.b).datepicker({
            dateFormat: "dd.mm.yy",
            maxDate: week,
            minDate: now,
            showOn: "both",
            buttonImageOnly: true,
            buttonText: "Календарь",
            autoSize: true
        });
        $(this.props.b).datepicker("setDate", date);
        console.log(this.props.a);
        console.log(this.props.b);
        */
        //if ( this.refs.datepicker.classList.contains ( 'hasDatePicker' ) ) return;
		
		$ (this.props.b).datepicker ( {
			onSelect : ( value ) => this.props.onChange ( value ? moment ( value , 'DD.MM.YYYY' ) : '' )
		} );
    }
    
    componentWillUnmount() {
        $(this.props.b).datepicker('destroy');
    }
    
    componentDidUpdate(prevProps) {
        const{date, now, week} = this.state;
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
        if (this.props.now !== prevProps.now) {
            this.setState({
                now: this.props.now
            });
        }
        if (this.props.week !== prevProps.week) {
            this.setState({
                week: this.props.week
            });
        }
        $ (this.props.b).datepicker ( {
			onSelect : ( value ) => this.props.onChange ( value ? moment ( value , 'DD.MM.YYYY' ) : '' )
		} );
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
                <input
                    className="form-control w-100 border border-dark border-3 rounded"
                    type="text"
                    id={this.props.a}
                    ref={this.refs.datepicker}
                    {...this.props}
                />
            );
        }
    }
}