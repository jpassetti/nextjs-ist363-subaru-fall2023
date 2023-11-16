import Layout from '../../components/Layout';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';

// WATERFALL
// 1. getStaticPaths
export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
        const { slug } = vehicle.node;
        return {
            params: {
                id: slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
// 2. getStaticProps
export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id);
    return {
        props : {
            vehicleData
        }
    }
}
// 3. page component
const SingleVehiclePage = ({ vehicleData }) => {
    const { title, slug } = vehicleData;
    return <Layout>
        <h1>{title}</h1>
    </Layout>
}
export default SingleVehiclePage;