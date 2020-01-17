
export default class OpenLawExtensions {
    static inviteUserEnpoint = "https://lib.openlaw.io/api/v1/etherizeit/user/emailMultipleNewUsers/user";
    static sendUsersInviteIfNonexistent(jwt: string, emails: string[]) {
        fetch(this.inviteUserEnpoint, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'OPENLAW_JWT' : jwt
            },
            body: JSON.stringify({emails: emails, instanceName: 'etherizeit'})
        })
            .then(res => {
                console.log(res);
            }).catch( err =>{
                console.log("error on invite user! " + err)
            }
        )
    }
}