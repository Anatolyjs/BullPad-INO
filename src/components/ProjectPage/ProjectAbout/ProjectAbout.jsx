import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveProjectInfo } from '../../../redux/sales-reduce';
import styles from './ProjectAbout.module.scss';
import ProjectInfo from './ProjectInfo';
import ProjectProgress from './ProjectProgress';

const ProjectAbout = ({inoId}) => {
    const dispatch = useDispatch();
    dispatch(setActiveProjectInfo(inoId));
    const project = useSelector(state => state.reducer.activeProjectInfo);
    if (!project) {
        return <div>loading...</div>
    }
    return (
        <div className={styles.projectAbout}>
            <ProjectProgress price={project.price} supply={project.supply}/>
            <ProjectInfo />
        </div>
    )
}

export default ProjectAbout;