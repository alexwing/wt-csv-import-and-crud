window.ProductRow = React.createClass({
    render: function() {
    return (
        <tr>
            <td className="text-center">{this.props.population.Edad}</td>
            <td className="text-right">{this.props.population.Hombre}</td>
            <td className="text-right">{this.props.population.Mujer}</td>
            <td className="text-right">{this.props.population.Total}</td>
            <td className="col-md-3 text-center">
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.population._id)}
                    className='btn btn-xs btn-info m-r-1em'> Read One
                </a>
                <a href='#'
                    onClick={() => this.props.changeAppMode('update', this.props.population._id)}
                    className='btn btn-xs btn-primary m-r-1em'> Edit
                </a>
                <a
                    onClick={() => this.props.changeAppMode('delete', this.props.population._id)}
                    className='btn btn-xs btn-danger'> Delete
                </a>
            </td>
        </tr>
        );
    }
});