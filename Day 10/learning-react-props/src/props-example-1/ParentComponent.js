import ProfileCard from './ChildComponent'

function ParentComponent() {
    let collageName = "piet";

    let profile = {
        'name': 'Kunal',
        'age': 19
    }

    return (
        <div>
            <ProfileCard profile={profile} collageName={collageName} />
        </div>
    )
}

export default ParentComponent;