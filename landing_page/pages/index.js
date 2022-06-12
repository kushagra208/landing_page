import Head from 'next/head'
import Content from '../components/Content'
import Counter from '../components/Counter'
import Products from '../components/Products'
import Speciality from '../components/Speciality'
import VideoPlayer from '../components/VideoPlayer'
import Parallax from '../components/Parallax'
export default function Home() {

  const urls =[
    "https://thebelgianwaffle.co/wp-content/uploads/2019/12/6.jpg",
    "https://thebelgianwaffle.co/wp-content/uploads/2019/12/21.jpg",
    "https://thebelgianwaffle.co/wp-content/uploads/2022/01/Website-image_Homepage1.jpg"
  ]
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='viewport' content='width-device-width' />
      </Head>
      <VideoPlayer />
      <Content />
      <Parallax url = {urls[0]} />
      <Speciality />
      <Parallax url = {urls[1]} />
      <Counter />
      <Parallax url = {urls[2]} />
      <Products />
    </div>
  )
}
