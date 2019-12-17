import React, {Component} from 'react';
import {Button} from '../../components/Button/Button';
import {LikedPetsList} from '../../components/LikedPetsList/LikedPetsList';
import PetPreview from '../../components/PetPreview/PetPreview';
import {deleteDoggo, likeDoggo} from "../../actions/doggos";

import './HomePage.scss';
import {Modal} from '../../components/Modal';
const CN = 'HomePage';

class HomePage extends Component {
    loadDoggo = async () => {
        const {url} = this.state;
        let response = await fetch(url);

        if (response.ok) {
            let {message = ''} = await response.json();
            this.setState({
                doggoUrl: message
            });
        } else {
            alert('Error HTTP: ' + response.status);
        }
    };


    // todo: pay attention - this functionality is changed
    onLikeDoggo = () => {
        const {doggoUrl} = this.state;
        const {likeDoggo, likedDoggos} = this.props; // this props are from redux

        if (doggoUrl && !likedDoggos.includes(doggoUrl)) {

            likeDoggo && likeDoggo(doggoUrl);
        }
    };


    onLoadDoggoClick = () => {
        this.loadDoggo();
    };

    toggleModal = () => {
        const {isModalOpened} = this.state;

        this.setState({
            isModalOpened: !isModalOpened
        });
    };

    constructor() {
        super();

        this.state = {
            url: 'https://dog.ceo/api/breeds/image/random',
            doggoUrl: '',
            // likedDoggos: [], // todo: remove! this is not needed anymore
            isModalOpened: false
        };

        console.log('HomePage constructor');
    }


    componentDidMount() {
        this.loadDoggo();
    }

    // todo: this functionality should be moved to redux action/reducer. not working now

  deleteDoggos = (pet) => {
        const {likedDoggos} = this.state;

        const doggos = likedDoggos.filter(dogs => dogs !== pet);

        this.setState({
            likedDoggos: doggos
        })
    };

    render() {
        const {doggoUrl, isModalOpened} = this.state;
        const {likedDoggos, deleteDoggo, deleteAll } = this.props;

        console.log('HomePage render');
        return (
            <div className={`${CN}`}>
                <div className={`${CN}__container`}>
                    <Modal isOpen={isModalOpened} handleModalToggle={this.toggleModal}>
                        <img src={doggoUrl} alt="liked-doggo"/>
                    </Modal>
                    <div className={`${CN}__left-side`}>
                        <PetPreview imageUrl={doggoUrl}/>
                        <div>
                            <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
                            <Button label="Show doggo in modal" onClick={this.toggleModal}/>
                            <Button label="Like doggo" onClick={this.onLikeDoggo}/>
                        </div>
                    </div>
                  <div>
                    <Button label="Delete all" remove={deleteAll}/>
                    <LikedPetsList list={likedDoggos} remove={deleteDoggo}/>
                  </div>

                </div>
            </div>
        );
    }
}

export default HomePage;
