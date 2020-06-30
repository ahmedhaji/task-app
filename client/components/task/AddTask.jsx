import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

export default class AddTask extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    save() {
        const { onAdd } = this.props;
        if (this.state.title) {
            onAdd(this.state.title);
            this.setState({
                title: ''
            });
        }
    }

    onChange(e, newValue) {
        e.preventDefault();
        this.setState({
            title: newValue
        })
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.save();
        }
    }

    componentDidMount() {
        this.textField.input.focus();
    }

    render() {
        var { title } = this.state;
        return (
            <div className="row">
                <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <TextField name="addTaskTextField"
                               ref={(node)=>this.textField=node}
                               hintText="Add task..."
                               fullWidth={true}
                               value={title}
                               onChange={(e,newValue)=>this.onChange(e,newValue)}
                               onKeyPress={(e)=>this.onKeyPress(e)}
                               onBlur={(e)=>this.save()} />
                </div>
            </div>
        )
    }
}

AddTask.PropTypes = {
    onAdd: React.PropTypes.func.isRequired
};