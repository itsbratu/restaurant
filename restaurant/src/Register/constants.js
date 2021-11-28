//GOOGLE CLASS ICONS FOR FORM STYLING

export const NICK_ICON = 'fas fa-id-card icon-color';
export const NAME_ICON = 'fas fa-user icon-color';
export const PASS_ICON = 'fas fa-key icon-color';
export const MAIL_ICON = 'fas fa-envelope-open icon-color';

//ATTRIBUTE OBJS FOR EASIER MAPPING

const NICK_ATTR = {type : "Nick" , icon : NICK_ICON , value : "nick" , setField : "setNick"};
const FIRSTNAME_ATTR = {type : "First name" , icon : NAME_ICON , value : "firstName" , setField : "setFirstName"};
const LASTNAME_ATTR = {type : "Last name" , icon : "" , value : "lastName" , setField : "setLastName"};
const PASS_ATTR = {type : "Password" , icon : PASS_ICON , value : "pass" , setField : "setPass"};
const REPASS_ATTR = {type : "Confirm Password" , icon : "" , value : "rePass" , setField : "setRePass"};
const EMAIL_ATTRS = {type : "Email" , icon : MAIL_ICON , value : "email" , setField : "setEmail"};

export const FIELDS = [NICK_ATTR , FIRSTNAME_ATTR , LASTNAME_ATTR , PASS_ATTR , REPASS_ATTR , EMAIL_ATTRS];

//USEFUL FUNCTIONS FOR REGEX_HOLDER
function nameRegexMsg(){
    return ([
        {"^[a-zA-Z]*$" : '-Name may contain only letters(a-zA-z)!'},
        {"^.{2,}$" : '-Name should contain at least 2 characters!'}
    ]);
}

function passRegexMsg(){
    return(
        [
            {"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])" : '-Password must contain at least one uppercase letter (A-Z) , one sybmol (!@#$%^&*) and one digit (0-9)'},
            {"^.{10,}$" : '-Password should contain at least 10 characters!'}
        ]
    )
}

//MAP CONTAINING ATTRIBUTES AND A LIST OR REGEX+MSG THAT WILL BE DISPLAYED BASED ON USER ERROR INPUT
export const REGEX_HOLDER = {
    nick : [{"^[a-zA-Z0-9-_]*$" : '-Nickname may contain only letters(a-zA-z) and digits(0-9)!'},
            {"^.{5,}$" : '-Nickname should contain at least 5 characters!'}
            ],
    firstName : nameRegexMsg(),
    lastName : nameRegexMsg(),
    pass : passRegexMsg(),
    rePass : passRegexMsg(),
    email : [
        {"^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z.-]+$" : '-Invalid email!'}
    ]
}

//ROUTING ADDRESSES

export const ROUTES_WITHOUT_HOMEPAGE = {
    '/login' : false,
    '/register' : false,
    '/cart' : false,
}
