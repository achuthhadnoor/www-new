import { allBlogs } from '.contentlayer/data';
import Container from 'components/Container'
import Social from 'components/Social'
import { Illustration } from 'components/Svg'

export default function Home() {
  return (
    <Container>
      <section>
        <div className="flex flex-col-reverse sm:flex-row w-full max-w-5xl m-auto">
          <div className="flex-1">
            <h1 className="text-3xl py-2">Achuth Hadnoor</h1>
            <h3 className="text-lg pb-5">Developer {'&'} UI/UX Designer</h3>
            <p className="text-sm max-w-prose leading-loose">
              👋 Hey, <br />I am a
              <a href="https://achuth.dev/dribbble"
                className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">designer</a>, <a target="_blank" rel="noopener noreferrer" href="https://achuth.dev/github" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">developer</a>,
              <a href="https://achuth.dev/medium" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">writer</a>
              and <a href="https://achuth.dev/producthunt" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">maker</a>. I craft digital products that are used by hundreds of creators
            </p>
            <div className="mt-5 flex items-center">
              <hr className="w-16" />
              <Social />
            </div>
          </div>
          <div className="">
            <Illustration />
          </div>
        </div>
      </section>
    </Container >
  )
}


export async function getStaticProps({ params }) {
  console.log(JSON.stringify(allBlogs));
  
  return { props: { allBlogs } };
}