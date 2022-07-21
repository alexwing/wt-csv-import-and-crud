window.ReadProductsComponent = React.createClass({
    getInitialState: function() {
        return {
            populations: []
        };
    },
componentDidMount: function(){
	this.serverRequest = $.get("http://localhost:3000/api/population/all", function(data){
        console.log(data.Population);
		this.setState  ({populations : data.Population});
	}.bind(this));
},
componentWillUnmount: function() {
        this.serverRequest.abort();
    },
     render: function() {
        // list of populations
        let filteredProducts = this.state.populations;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    populations={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});