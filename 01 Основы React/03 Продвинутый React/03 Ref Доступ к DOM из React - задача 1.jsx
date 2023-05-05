// //app.js

// import React from 'react';
// import Film from './film';
// import styles from '../styles.module.css'
// import withFetch from './hocs/with-fetch.js'





// export default class App extends React.Component {
  

//   render() {
    
//    const WithFetchFilm = withFetch();   

    
//     return (
//  <WithFetchFilm />
//     );
//   }
// }






// //with-fetch.js

// import React from 'react';
// import Film from '../film';
// import styles from '../../styles.module.css'



// const withFetch = () => class extends React.Component {
//   state = {
//     isLoading: false,
//     hasError: false,
//     data: []
//   };

//   componentDidMount() {
//     this.getFilms();
//   }

//   getFilms = () => {
//     this.setState({ ...this.state, hasError: false, isLoading: true });
//     fetch('https://api.nomoreparties.co/beatfilm-movies')
//       .then(res => res.json())
//       .then(data => this.setState({ ...this.state, data, isLoading: false }))
//       .catch(e => {
//         this.setState({ ...this.state, hasError: true, isLoading: false });
//       });
//   };

//   render() {
//     const { data, isLoading, hasError } = this.state;
//     return (
//       <div className={`${styles.app} ${styles.grid}`}>
//         {isLoading && 'Загрузка...'}
//         {hasError && 'Произошла ошибка'}
//         {!isLoading && !hasError && data.length && data.map((film, index) => <Film key={index} data={film} />)}
//       </div>
//     );
//   }
// }


// export default withFetch