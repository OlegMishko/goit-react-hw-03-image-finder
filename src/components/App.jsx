import { Component } from 'react';

import fetchPics from './service/ApiService';

import { MainPage } from 'common/MainPage.styled';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevState, prevProps) {
    console.log('componentDidUpdate');
  }

  render() {
    // const {} = this.state;

    return (
      <MainPage>
        console.log(first)
        {/* <SearhBar />
        <ImageGallery />
        <Button />
        <Modal /> */}
      </MainPage>
    );
  }
}
