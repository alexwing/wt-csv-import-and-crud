window.CreateProductComponent = React.createClass({
    getInitialState: function() {
    return {
        Edad: '',
        Hombre: '',
        Mujer: '',
        Total: '',
        successCreation: null
    };
},
 
// on mount, get all categories and store them in this component's state

 
onHombreChange: function(e) {
    this.setState({Hombre: e.target.value});
},
 
// handle name change
onEdadChange: function(e) {
    this.setState({Edad: e.target.value});
},
 
// handle description change
onMujerChange: function(e) {
    this.setState({Mujer: e.target.value});
},
 
// handle price change
onTotalChange: function(e) {
    this.setState({Total: e.target.value});
},

onSave: function(e){
 
    this.state.Hombre = isNaN( parseFloat(this.state.Hombre))? 0 :parseFloat(this.state.Hombre)
    this.state.Mujer = isNaN( parseFloat(this.state.Mujer))? 0 :parseFloat(this.state.Mujer)
    this.state.Total = isNaN( parseFloat(this.state.Total))? 0 :parseFloat(this.state.Total)
    
    // data in the form
    //no necesary in GET metod
    /*
    var form_data={
        Edad: this.state.Edad,
        Hombre: this.state.Hombre,
        Mujer: this.state.Mujer,
        Total: this.state.Total,
    };*/
 
    // submit form data to api
    $.ajax({
        url: "http://localhost:3000/api/population/add/"+this.state.Edad+"/"+this.state.Hombre+"/"+this.state.Mujer+"/"+this.state.Total,
        type : "GET",
        contentType : 'application/json',
       // data : JSON.stringify(form_data),
        success : function(response) {
 
            // api message
            this.setState({successCreation: response['message']});
            
            // empty form
            this.setState({Edad: ""});
            this.setState({Hombre: ""});
            this.setState({Mujer: ""});
            this.setState({Total:""});
            
        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });
 
    e.preventDefault();
},

render: function() {
 
    // make categories as option for the select tag.
 
    return (
    <div>
        {
 
            this.state.successCreation == 1 ?
                <div className='alert alert-success'>
                    Population Created.
                </div>
            : null
        }
 
        {
 
            this.state.successCreation ==   0 ?
                <div className='alert alert-danger'>
                    Insert Error. Please try again.
                </div>
            : null
        }
 
        <a href='#'
            onClick={() => this.props.changeAppMode('read')}
            className='btn btn-primary margin-bottom-1em'> Read Products
        </a>
 
 
        <form onSubmit={this.onSave}>
            <table className='table table-bordered table-hover'>
            <tbody>
                <tr>
                    <td>Edad</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Edad}
                        required
                        onChange={this.onEdadChange} />
                    </td>
                </tr>
 
                <tr>
                    <td>Hombre</td>
                    <td>
                        <textarea
                        type='text'
                        className='form-control'
                        required
                        value={this.state.Hombre}
                        onChange={this.onHombreChange}>
                        </textarea>
                    </td>
                </tr>
 
                <tr>
                    <td>Mujer</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Mujer}
                        required
                        onChange={this.onMujerChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Total}
                        required
                        onChange={this.onTotalChange}/>
                    </td>
                </tr>

 
                <tr>
                    <td></td>
                    <td>
                        <button
                        className='btn btn-primary'
                        onClick={this.onSave}>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
    );
}

});