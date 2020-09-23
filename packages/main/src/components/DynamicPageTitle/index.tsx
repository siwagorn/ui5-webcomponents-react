import { createComponentStyles, StyleClassHelper, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React, { FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { BreadcrumbsPropTypes } from '../Breadcrumbs';
import { DynamicPageTitleStyles } from './DynamicPageTitle.jss';

export interface DynamicPageTitleProps extends CommonProps {
  /**
   * The `DynamicPageTitle` actions.
   */
  actions?: ReactElement | ReactElement[];

  /**
   * The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.
   */
  breadcrumbs?: ReactElement<BreadcrumbsPropTypes>;

  /**
   * The content is positioned in the `DynamicPageTitle` middle area
   */
  children?: ReactNode | ReactNodeArray;

  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  heading?: ReactNode;
  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  subHeading?: ReactNode;
  /**
   * The `DynamicPageTitle` navigation actions.<br />
   * *Note*: The `navigationActions` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the actions.
   * Otherwise, they are rendered in the top-right area, above the actions.
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.
   *
   */
  navigationActions?: ReactElement | ReactElement[];
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => boolean;
}

const useStyles = createComponentStyles(DynamicPageTitleStyles, { name: 'DynamicPageTitle' });

const DynamicPageTitle: FC<DynamicPageTitleProps> = forwardRef(
  (props: DynamicPageTitleProps, ref: Ref<HTMLDivElement>) => {
    const {
      actions,
      onToggleHeaderContentVisibility,
      breadcrumbs,
      children,
      heading,
      subHeading,
      navigationActions,
      className,
      style
    } = props;

    const classes = useStyles();

    const containerClasses = StyleClassHelper.of(classes.container);

    containerClasses.putIfPresent(className);
    const passThroughProps = usePassThroughHtmlProps(props);
    return (
      <FlexBox
        style={style}
        className={classes.container}
        ref={ref}
        data-component-name="DynamicPageTitle"
        {...passThroughProps}
        // @ts-ignore
        onClick={onToggleHeaderContentVisibility}
      >
        <div className={classes.breadcrumbs}>{breadcrumbs}</div>
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ flexGrow: 1, width: '100%' }}>
          <FlexBox className={classes.titleMainSection}>
            <div className={classes.title}>{heading}</div>
            <div className={classes.content}>
              <Toolbar toolbarStyle={ToolbarStyle.Clear}>{children}</Toolbar>
            </div>
          </FlexBox>
          <Toolbar className={classes.actions} toolbarStyle={ToolbarStyle.Clear}>
            {actions}
          </Toolbar>
          <Toolbar toolbarStyle={ToolbarStyle.Clear}>
            <ToolbarSpacer />
            {navigationActions}
          </Toolbar>
        </FlexBox>
        <FlexBox>
          <div className={classes.subTitle}>{subHeading}</div>
        </FlexBox>
      </FlexBox>
    );
  }
);

DynamicPageTitle.displayName = 'DynamicPageTitle';

export { DynamicPageTitle };
