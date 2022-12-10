import styles from "./ProjectAbout.module.scss";

const ProjectInfo = () => {
  return (
    <div className={styles.projectInfo}>
      <div className={styles.projectInfo__title}>Project Information</div>
      <div className={styles.projectInfo__description}>
        <p>
        Calo Indoor is one of the new quantum realms that belong to the Calo
        Metaverse Ecosystem. Calo Indoor is an application that encourages users
        to be active in sports through game-play designed with AR technology and
        game-fi. If Calo Outdoor (Calo Run) requires players to equip NFT
        Sneakers to start moving to earn, then when coming to Calo Indoor,
        players also need a pair of NFT shoes according to the Casual concept.
        II. Gameplay Different types of shoes give users different access to
        certain games on the system. Core loop Players will be allowed to choose
        1 out of 3 difficulty levels which are Easy, Medium, and Hard. Each
        level will have its hardness and the mission of the players is to
        overcome all the challenges in that level to get the prize. First, you
        need to own at least a Slipper because this game is just available for
        the owner of these shoes. You must stand in front of the camera for
        about 1 meter to be recognized and adjust your body the same as in the
        sample picture. After being recognized, you are totally able to start
        the game. You need to use your hand to reach the circles which can be
        seen on your phone screen. As long as the TouchPoint Active is still
        available, you need to control your speed and accuracy to reach them in
        order; by the time you do that, you will get different points depending
        on the level. On the other hand, if you accidentally miss a Touch Point
        Active, your points will be deducted.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
