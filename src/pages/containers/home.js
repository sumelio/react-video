import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleErrorContainer from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleOpenModal = (mediaProps) => {
        console.log('handleOpenModal')
        this.setState({
            modalVisible: true,
            mediaProps
        })
    }
    handleCloseModalClick = (event) => {

        console.log('handleCloseModalClick')
        this.setState({
            modalVisible: false,
        })
    }

   render() {
        return (
          <HandleErrorContainer>
            <HomeLayout> 
                <Related className="Related" />
            
                <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
                {
                    this.state.modalVisible && 
                    <ModalContainer>
                        <Modal handleCloseClick={this.handleCloseModalClick} >
                        <VideoPlayer 
                              autoplay={true}
                              src={this.state.mediaProps.src}
                              title={this.state.mediaProps.title}
                           />
                        </Modal>
                    </ModalContainer>
                }
                
            </HomeLayout>
          </HandleErrorContainer>
        )
    }
}

export default Home