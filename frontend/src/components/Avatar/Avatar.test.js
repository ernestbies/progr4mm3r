import renderer from 'react-test-renderer';
import Avatar from "./Avatar";
import React from "react";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: key => key }),
}));

describe('avatar tests', () => {
    let avatar;
    let tree;

    beforeEach(() => {
        avatar = renderer.create(
            <Avatar width={200} height={200} src={'images/me.png'}/>
        );
        tree = avatar.toJSON();
    });

    test('Avatar renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    test('Avatar renders with correct width and height', () => {
        const avatarWidth = 200;
        const avatarHeight = 200;

        const width = tree.props.width;
        const height = tree.props.height;

        expect(width).toBe(avatarWidth);
        expect(height).toBe(avatarHeight);
    });

    afterAll(() => {
       console.info('Tests finished')
    });
});
