// // film.js


// import React from 'react';
// import styles from '../styles.module.css'

// const Film = ({ data }) => {
//   const image = (
//     <img
//       src={
//         data.image
//           ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
//           : 'https://via.placeholder.com/250x150'
//       }
//       alt={data.nameRU}
//     />
//   );
//   return (
//     <article>
//       <div className={styles.img}>
//         {image}
//       </div>
//       <h2 className={styles.name}>{data.nameRU}</h2>
//       <p className={styles.description}>{`${data.year}, ${data.country}`}</p>
//       <p className={styles.description}>{`${data.duration} мин.`}</p>
//     </article>
//   );
// };

// export default Film;


// // app.js

// import React from 'react';
// import withFetch from './hocs/with-fetch';
// import styles from '../styles.module.css'
// import Film from './film';
// const WithFetchFilm = withFetch('https://api.nomoreparties.co/beatfilm-movies')(Film);

// class App extends React.Component {

//   // eslint-disable-next-line class-methods-use-this
//   render() {
//     return (
//       <div className={styles.app}>
//         <WithFetchFilm />
//       </div>
//     )
//   }
// }

// export default App;


// // withFetch.js


// import React from 'react';

// import styles from '../../styles.module.css'

// const withFetch = props => WrappedComponent => class extends React.Component {
//     state = {
//       isLoading: false,
//       hasError: false,
//       data: []
//     };

//     componentDidMount() {
//       this.getData();
//     }

//     getData() {
//       this.setState({ ...this.state, hasError: false, isLoading: true });

//       fetch(props)
//         .then((res) => res.json())
//         .then((data) =>
//           this.setState({ ...this.state, data, isLoading: false })
//         )
//         .catch((e) => {
//           this.setState({ ...this.state, hasError: true, isLoading: false });
//         });
//     }

//     render() {
//       const { data, isLoading, hasError } = this.state;
//       return (
//         <section className={styles.grid}>
//           {isLoading && "Загрузка..."}
//           {hasError && "Произошла ошибка"}
//           {!isLoading &&
//           !hasError &&
//           data.length &&
//           data.map((film, index) => <WrappedComponent key={index} data={film} />)}
//         </section>
//       );
//     }
// };

// export default withFetch;