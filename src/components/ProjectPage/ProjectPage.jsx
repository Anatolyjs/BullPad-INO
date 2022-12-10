import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProjectAbout from './ProjectAbout/ProjectAbout';
import ProjectIntro from './ProjectIntro/ProjectIntro';
import styles from './ProjectPage.module.scss';

const ProjectPage = () => {
    const params = useParams(); 
    return (
        <section className={styles.projectPage}>
            <div className='container'>
                <ProjectIntro inoId={params.inoId}/>
                <ProjectAbout inoId={params.inoId}/>
            </div>
        </section>
    )
}

export default ProjectPage;