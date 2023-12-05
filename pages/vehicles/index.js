import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

import { getAllVehicles } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    return {
        props: {
            vehicles
        }
    }
}
const VehiclesPage = ({ vehicles }) => {
    return <Layout>
        <h1>Vehicles</h1>
        <Container>
            <Grid>
                {vehicles.map((vehicle, index) => {
                    const { title, slug, vehicleInformation } = vehicle.node;
                    const { trimLevels } = vehicleInformation;
                    return <li key={index}>
                        {trimLevels && trimLevels[0].images.thumbnail && 
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }
                        <h3>{title}</h3>
                        <p>
                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
                        </p>
                    </li>
                })}
            </Grid>
        </Container>
    </Layout>
}  
export default VehiclesPage;