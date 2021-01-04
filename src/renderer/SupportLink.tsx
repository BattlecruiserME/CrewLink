import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { shell } from 'electron';

const SupportLink: React.FC = function () {
	return (
		<Typography align="center">
			Download it{' '}
			<Link
				href="#"
				color="secondary"
				onClick={() => shell.openExternal('https://voice.battlecruiser.cf/download')}
			>
				here
			</Link>
			.
		</Typography>
	);
};

export default SupportLink;
