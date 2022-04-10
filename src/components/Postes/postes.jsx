import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePoste, getPostes } from '../actions/postesActions';

 class postes extends Component {
    onDeletePoste = (id )=>{
        console.log("delete Contact " + id )
        this.props.deletePoste(id );
    }
     componentDidMount (){
         this.props.getPostes();
         console.log(this.props.postes)
     }
  
  render() {
      const {postes} =this.props;
    return (
      <div className='containers'>
       <div className="row">   
           {!postes ? <h1>No Postes </h1>: postes.map(poste => (
                 <div className="col-md-6">
                  <div class="card mt-3">
                   <div class="card-body">
                   <h4 class="card-title">{poste.title} 
                       <i
                            className="fas fa-times"
                            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                            onClick={this.onDeletePoste.bind(this, poste.id)}
                        />
                   </h4>
                   <p class="card-text">{poste.body}</p>
                   <button  class="btn btn-primary">More ..</button>
               </div>
               </div>
               </div>
           ))}
        </div>
       </div>

    )
  }
}
const mapStateToProps = (state)=> {
    return {
         postes: state.myPostes.postes 
    }
}

export default connect(mapStateToProps,{getPostes ,deletePoste})(postes);


