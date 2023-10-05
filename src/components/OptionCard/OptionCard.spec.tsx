import { render, screen } from '@testing-library/react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import OptionCard from './'

describe("Component: OptionCard", () => {
    let component;
    
    beforeEach(() => {
        component = render(
            <OptionCard
            onPress={jest.fn()}
            text='Option Text'
            icon={<MaterialCommunityIcons name="clipboard-list" testID="icon" />}
          />
        );
    });

    it("should render option text", () => {
        const cardText = screen.queryByText("Option Text")
        expect(cardText).toBeTruthy()
    })

    it("should render option text", () => {
        const icon = screen.queryByTestId("icon")
        expect(icon).toBeTruthy()
    })
})