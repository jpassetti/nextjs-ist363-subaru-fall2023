import Layout from '../../components/Layout';
import { getVehicleBySlug } from '../../lib/api';

export async function getStaticProps() {
    const vehicleData = getVehicleBySlug("impreza");

    return {
        props : {
            vehicleData
        }
    }
}

const SingleVehiclePage = ({ vehicleData }) => {
    const { model, price } = vehicleData;
    return <Layout>
        <h1>{model}</h1>
        <h2>${price}</h2>
    </Layout>
}
export default SingleVehiclePage;